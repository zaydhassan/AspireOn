"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { generateQuiz, saveQuizResult } from "@/actions/interview";
import QuizResult from "./quiz-result";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const {
    loading: generatingQuiz,
    fn: generateQuizFn,
    data: quizData,
  } = useFetch(generateQuiz);

  const {
    loading: savingResult,
    fn: saveQuizResultFn,
    data: resultData,
    setData: setResultData,
  } = useFetch(saveQuizResult);

  useEffect(() => {
    if (quizData) {
      setAnswers(new Array(quizData.length).fill(null));
      setCurrentQuestion(0);
      setShowExplanation(false);
    }
  }, [quizData]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });
    return (correct / quizData.length) * 100;
  };

  const finishQuiz = async () => {
    const score = calculateScore();
    try {
      await saveQuizResultFn(quizData, answers, score);
      toast.success("Quiz completed!");
    } catch (error) {
      toast.error(error.message || "Failed to save quiz results");
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const startNewQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowExplanation(false);
    setResultData(null);
    generateQuizFn();
  };

  if (generatingQuiz) {
    return (
      <div className="flex justify-center py-10">
        <BarLoader color="#6366F1" width="100%" height={6} />
      </div>
    );
  }

  if (resultData) {
    return (
      <div className="mx-4 md:mx-auto max-w-3xl">
        <QuizResult result={resultData} onStartNew={startNewQuiz} />
      </div>
    );
  }

  if (!quizData) {
    return (
      <Card className="mx-4 md:mx-auto max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Ready to test your knowledge?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-center">
            This quiz contains 10 tailored questions designed around your skills and industry. Take your time and choose carefully.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={generateQuizFn}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition"
            size="lg"
            aria-label="Start Quiz"
          >
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <Card className="mx-4 md:mx-auto max-w-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Question {currentQuestion + 1} of {quizData.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.p
          key={question.question}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-medium text-gray-900 dark:text-gray-100"
        >
          {question.question}
        </motion.p>

        <RadioGroup
          onValueChange={handleAnswer}
          value={answers[currentQuestion]}
          className="space-y-3"
          aria-label={`Options for question ${currentQuestion + 1}`}
        >
          {question.options.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 p-3 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900 cursor-pointer transition"
            >
              <RadioGroupItem
                value={option}
                id={`option-${idx}`}
                className="ring-offset-white dark:ring-offset-black focus:ring-indigo-500"
              />
              <Label
                htmlFor={`option-${idx}`}
                className="text-gray-700 dark:text-gray-300 select-none"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-indigo-100 dark:bg-indigo-900 rounded-md"
            >
              <p className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                Explanation:
              </p>
              <p className="text-gray-700 dark:text-gray-200">{question.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showExplanation && (
          <Button
            onClick={() => setShowExplanation(true)}
            variant="outline"
            disabled={!answers[currentQuestion]}
          >
            Show Explanation
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!answers[currentQuestion] || savingResult}
          className="ml-auto"
          aria-label={currentQuestion < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
        >
          {savingResult ? (
            <BarLoader width={60} height={6} color="#6366F1" />
          ) : currentQuestion < quizData.length - 1 ? (
            "Next Question"
          ) : (
            "Finish Quiz"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
