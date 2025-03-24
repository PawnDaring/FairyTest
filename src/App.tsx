import React, { useState } from 'react';
import { Sparkles, Waves } from 'lucide-react';
import { questions } from './data/questions';
import { alignments } from './data/alignments';
import { descriptions } from './data/descriptions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    return alignments.reduce((prev, curr) => {
      return Math.abs(curr.score - averageScore) < Math.abs(prev.score - averageScore) ? curr : prev;
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores([]);
    setShowResult(false);
  };

  
  const getImagePath = (archetype: string) => {
    const imageMap: Record<string, string> = {
      'Siren': 'src/images/mermaid siren.png',
      'Fae-Siren': 'src/images/Fae-Siren.png',
      'Pixie': 'src/images/pixie.png',
      'Undine': 'src/images/Undine.png',
      'Selkie': 'src/images/Selkie.png',
      'Banshee': 'src/images/Banshee.png',
      'Sprite': 'src/images/sprite.png',
      'Nymph': 'src/images/Nymph.png',
      'Dryad-Nereid': 'src/images/Dryad-Nereid.png'
    };
    return imageMap[archetype] || '';
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-teal-900 text-white"
      style={{
        backgroundImage: `url("/src/images/background.png")`,
        backgroundBlend: 'soft-light',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-200">
              The Mermaid & Fairy
            </h1>
            <div className="flex justify-center gap-4 mb-4">
              <Waves className="w-8 h-8 text-teal-300" />
              <Sparkles className="w-8 h-8 text-purple-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-100">
              Alignment Test
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8">
            {!showResult ? (
              <div className="space-y-6">
                <div className="mb-8">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-300">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-6">
                  {questions[currentQuestion].text}
                </h3>

                <div className="space-y-4">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer.score)}
                      className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                    >
                      {answer.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                {(() => {
                  const result = calculateResult();
                  const description = descriptions[result.archetype];
                  return (
                    <>
                      <div className="relative mb-8 group">
                        <img 
                          src={getImagePath(result.archetype)}
                          alt={result.archetype}
                          className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-white/30 shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-2">{description.title}</h3>
                        <p className="text-xl italic text-teal-200 mb-4">{description.subtitle}</p>
                        <div className="space-y-2">
                          <p className="text-lg text-purple-200">
                            {result.disposition} {result.coreType}
                          </p>
                        </div>
                      </div>

                      <div className="prose prose-invert mx-auto max-w-2xl space-y-6">
                        <div className="bg-white/5 p-6 rounded-lg">
                          <p className="text-lg leading-relaxed">{description.essence}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white/5 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-teal-300 mb-2">Signature Power</h4>
                            <p className="text-xl">{result.signatureTrait}</p>
                          </div>
                          <div className="bg-white/5 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-purple-300 mb-2">Weakness</h4>
                            <p className="text-xl">{result.weakness}</p>
                          </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-teal-300 mb-2">Your Lesson</h4>
                          <p className="text-lg italic">{description.lesson}</p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-purple-300 mb-2">Folklore</h4>
                          <p className="text-sm">{description.folklore}</p>
                        </div>
                      </div>

                      <button
                        onClick={resetQuiz}
                        className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
                      >
                        Take the Quiz Again
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
