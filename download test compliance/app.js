// Alliance Advisors IR Email Marketing Compliance Quiz

class AllianceComplianceQuiz {
    constructor() {
        this.quizData = [
            {
                "id": 1,
                "scenario": "You meet an investor at a conference who gives you their business card. They express interest in your client's upcoming IPO and ask to be kept informed.",
                "options": [
                    "A) You can immediately add them to your investor newsletter list",
                    "B) You cannot email them without explicit written consent", 
                    "C) You can send one follow-up email but need consent for ongoing communications",
                    "D) You can email them for business purposes but need GDPR consent if EU-based"
                ],
                "correct_answer": "D",
                "explanation": "You can email them using implied consent (business card disclosure) under CASL and CAN-SPAM, but should obtain explicit consent for GDPR compliance if they're EU-based",
                "legal_analysis": {
                    "CASL": "Implied consent - recipient disclosed electronic address directly to sender for business purposes",
                    "CAN_SPAM": "No explicit consent required, but must include opt-out and physical address", 
                    "GDPR": "Need explicit consent for marketing emails to EU residents"
                }
            },
            {
                "id": 2,
                "scenario": "An existing client introduces you to potential investors at a private dinner. You collect email addresses verbally during networking conversations.",
                "options": [
                    "A) Add them immediately to your general mailing list",
                    "B) Send confirmation email documenting the conversation and request explicit consent",
                    "C) Cannot use verbal consent - need written permission only",
                    "D) Can email them for 6 months without additional consent"
                ],
                "correct_answer": "B",
                "explanation": "Document the verbal consent immediately, send confirmation email, and obtain explicit consent for ongoing marketing",
                "legal_analysis": {
                    "CASL": "Implied consent through direct disclosure, but should confirm in writing",
                    "CAN_SPAM": "Can send with proper identification and opt-out",
                    "GDPR": "Verbal consent is valid but must be documented and provable"
                }
            },
            {
                "id": 3,
                "scenario": "You receive an attendee list from a conference organizer containing 500 investor email addresses. You sponsored the event.",
                "options": [
                    "A) Can email all attendees since you sponsored the event",
                    "B) Cannot use the list - no direct consent from recipients",
                    "C) Can email once to introduce your services", 
                    "D) Can use for 30 days post-event only"
                ],
                "correct_answer": "B",
                "explanation": "Cannot use the list for marketing without individual consent from each attendee - these are third-party addresses",
                "legal_analysis": {
                    "CASL": "Third-party lists don't qualify for implied consent",
                    "CAN_SPAM": "Can email but high risk of spam complaints",
                    "GDPR": "No lawful basis for processing without individual consent"
                }
            },
            {
                "id": 4,
                "scenario": "An investor from your existing client relationship two years ago reaches out asking about new investment opportunities.",
                "options": [
                    "A) Cannot email - relationship expired after 2 years",
                    "B) Can email under existing business relationship but should confirm preferences",
                    "C) Need completely new consent regardless of past relationship",
                    "D) Can email freely since they contacted you first"
                ],
                "correct_answer": "B", 
                "explanation": "Can email them under existing business relationship (CASL) but should confirm current consent preferences",
                "legal_analysis": {
                    "CASL": "Existing business relationship valid for 2 years from last transaction",
                    "CAN_SPAM": "Can email with proper opt-out mechanisms",
                    "GDPR": "May need to refresh consent depending on original basis"
                }
            },
            {
                "id": 5,
                "scenario": "A potential investor fills out a 'Contact Us' form on your website asking for information about investment opportunities.",
                "options": [
                    "A) Can only send one response email",
                    "B) Can add to mailing list and send regular updates",
                    "C) Need additional consent beyond form submission",
                    "D) Can email them but must get separate consent for newsletter"
                ],
                "correct_answer": "B",
                "explanation": "Can email them as they initiated contact and provided consent through the form submission",
                "legal_analysis": {
                    "CASL": "Express consent through form submission",
                    "CAN_SPAM": "Opt-in through website form",
                    "GDPR": "Lawful basis through consent or legitimate interest"
                }
            },
            {
                "id": 6,
                "scenario": "Your client company CEO wants to email their personal network about an upcoming investment round.",
                "options": [
                    "A) CEO can email personal contacts freely",
                    "B) Personal network counts as existing relationship", 
                    "C) Need proper consent even for personal network in business context",
                    "D) Can email once but not add to marketing lists"
                ],
                "correct_answer": "C",
                "explanation": "Personal contacts don't automatically qualify for business email marketing - need proper consent",
                "legal_analysis": {
                    "CASL": "Personal relationships don't create business email consent",
                    "CAN_SPAM": "Still subject to commercial email rules",
                    "GDPR": "Personal data processing needs lawful basis"
                }
            },
            {
                "id": 7,
                "scenario": "An investor subscribed to your newsletter 3 years ago but hasn't engaged with any emails recently.",
                "options": [
                    "A) Must remove after 2 years of inactivity",
                    "B) Can continue emailing until they unsubscribe",
                    "C) Need to reconfirm consent after 3 years",
                    "D) Should remove from list due to lack of engagement"
                ],
                "correct_answer": "B",
                "explanation": "Can continue emailing if they haven't unsubscribed, but consider re-engagement campaign",
                "legal_analysis": {
                    "CASL": "Express consent doesn't expire unless withdrawn",
                    "CAN_SPAM": "Can continue until they opt-out", 
                    "GDPR": "Should review consent and consider data minimization"
                }
            },
            {
                "id": 8,
                "scenario": "You want to email publicly available addresses of investment fund managers found on LinkedIn.",
                "options": [
                    "A) Can email any publicly available business address",
                    "B) Cannot use LinkedIn addresses for marketing",
                    "C) Can email if address is published for business purposes",
                    "D) Need explicit permission regardless of public availability"
                ],
                "correct_answer": "B",
                "explanation": "Can email under CASL if publicly published for business purposes, but risky for GDPR and may violate LinkedIn terms",
                "legal_analysis": {
                    "CASL": "Implied consent for conspicuously published business addresses",
                    "CAN_SPAM": "Can email but expect high spam complaints",
                    "GDPR": "No lawful basis for processing without consent"
                }
            },
            {
                "id": 9,
                "scenario": "A Canadian pension fund manager requests information about ESG investment opportunities via email.",
                "options": [
                    "A) Can only send one response email",
                    "B) Can add to ESG-focused communications list",
                    "C) Need separate consent for any follow-up",
                    "D) Can email for 6 months then need new consent"
                ],
                "correct_answer": "B",
                "explanation": "Can respond and add to relevant communications as they initiated contact for business purposes",
                "legal_analysis": {
                    "CASL": "Inquiry creates implied consent for 6 months",
                    "CAN_SPAM": "Response to inquiry is permitted",
                    "GDPR": "Legitimate interest or consent through inquiry"
                }
            },
            {
                "id": 10,
                "scenario": "You acquire a boutique IR firm and inherit their client and prospect email lists.",
                "options": [
                    "A) All consent automatically transfers with business acquisition",
                    "B) Must start fresh with all contacts",
                    "C) Should notify contacts of change and allow re-consent",
                    "D) Can use lists for 90 days then need new consent"
                ],
                "correct_answer": "C",
                "explanation": "Existing client relationships may transfer, but should notify contacts and allow re-consent",
                "legal_analysis": {
                    "CASL": "Business asset transfer may maintain existing relationships",
                    "CAN_SPAM": "Must notify of business change",
                    "GDPR": "Must notify data subjects and may need new consent"
                }
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.selectedAnswer = null;
        
        this.initializeEventListeners();
        this.showScreen('welcome-screen');
    }
    
    initializeEventListeners() {
        // Welcome screen
        const startBtn = document.getElementById('start-quiz-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startQuiz());
        }
        
        // Quiz screen
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswer());
        }
        
        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }
        
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        
        // Feedback screen
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.continueToNext());
        }
        
        // Results screen
        const retakeBtn = document.getElementById('retake-quiz-btn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => this.retakeQuiz());
        }
        
        const reviewBtn = document.getElementById('review-answers-btn');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => this.reviewAnswers());
        }
    }
    
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show the target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
    
    startQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.selectedAnswer = null;
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }
    
    displayQuestion() {
        const question = this.quizData[this.currentQuestionIndex];
        const totalQuestions = this.quizData.length;
        
        // Update question counter and progress
        const questionCounter = document.getElementById('question-counter');
        if (questionCounter) {
            questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${totalQuestions}`;
        }
        
        const progressPercent = ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
        }
        
        // Update scenario text
        const scenarioText = document.getElementById('scenario-text');
        if (scenarioText) {
            scenarioText.textContent = question.scenario;
        }
        
        // Create option buttons
        const optionsList = document.getElementById('options-list');
        if (optionsList) {
            optionsList.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option;
                button.addEventListener('click', () => this.selectOption(index, button));
                optionsList.appendChild(button);
            });
        }
        
        // Reset selected answer and submit button
        this.selectedAnswer = null;
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    
    selectOption(index, buttonElement) {
        // Remove previous selection
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selection to clicked button
        buttonElement.classList.add('selected');
        this.selectedAnswer = index;
        
        // Enable submit button
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
        }
    }
    
    submitAnswer() {
        if (this.selectedAnswer === null) return;
        
        const question = this.quizData[this.currentQuestionIndex];
        const selectedOptionText = question.options[this.selectedAnswer];
        const selectedLetter = selectedOptionText.charAt(0);
        const isCorrect = selectedLetter === question.correct_answer;
        
        // Store user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: selectedLetter,
            selectedText: selectedOptionText,
            isCorrect: isCorrect,
            question: question
        });
        
        if (isCorrect) {
            this.score++;
        }
        
        // Show feedback
        this.showFeedback(isCorrect, question);
    }
    
    showFeedback(isCorrect, question) {
        this.showScreen('feedback-screen');
        
        const feedbackStatus = document.getElementById('feedback-status');
        const feedbackTitle = document.getElementById('feedback-title');
        
        if (feedbackStatus && feedbackTitle) {
            if (isCorrect) {
                feedbackStatus.className = 'feedback-status correct';
                feedbackTitle.textContent = 'Correct!';
            } else {
                feedbackStatus.className = 'feedback-status incorrect';
                feedbackTitle.textContent = 'Incorrect';
            }
        }
        
        // Find and display correct answer
        const correctOption = question.options.find(option => 
            option.charAt(0) === question.correct_answer
        );
        const correctAnswerText = document.getElementById('correct-answer-text');
        if (correctAnswerText) {
            correctAnswerText.textContent = correctOption || '';
        }
        
        // Display explanation
        const explanationText = document.getElementById('explanation-text');
        if (explanationText) {
            explanationText.textContent = question.explanation;
        }
        
        // Display legal analysis
        const caslAnalysis = document.getElementById('casl-analysis');
        if (caslAnalysis) {
            caslAnalysis.textContent = question.legal_analysis.CASL;
        }
        
        const canspamAnalysis = document.getElementById('canspam-analysis');
        if (canspamAnalysis) {
            canspamAnalysis.textContent = question.legal_analysis.CAN_SPAM;
        }
        
        const gdprAnalysis = document.getElementById('gdpr-analysis');
        if (gdprAnalysis) {
            gdprAnalysis.textContent = question.legal_analysis.GDPR;
        }
        
        // Update continue button text
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            if (this.currentQuestionIndex < this.quizData.length - 1) {
                continueBtn.textContent = 'Continue to Next Question';
            } else {
                continueBtn.textContent = 'View Results';
            }
        }
    }
    
    continueToNext() {
        if (this.currentQuestionIndex < this.quizData.length - 1) {
            this.currentQuestionIndex++;
            this.showScreen('quiz-screen');
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.quizData.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        // Hide navigation buttons in quiz mode - only show after answer submission
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
    
    showResults() {
        this.showScreen('results-screen');
        
        const totalQuestions = this.quizData.length;
        const correctAnswers = this.score;
        const incorrectAnswers = totalQuestions - correctAnswers;
        const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Update score display
        const finalScore = document.getElementById('final-score');
        if (finalScore) {
            finalScore.textContent = correctAnswers.toString();
        }
        
        // Update score message
        const scoreMessage = document.getElementById('score-message');
        if (scoreMessage) {
            if (accuracy >= 90) {
                scoreMessage.textContent = 'Excellent! You demonstrate exceptional understanding of email marketing compliance across all three jurisdictions.';
            } else if (accuracy >= 80) {
                scoreMessage.textContent = 'Very Good! You have a strong grasp of compliance requirements with minor areas for improvement.';
            } else if (accuracy >= 70) {
                scoreMessage.textContent = 'Good Work! You understand the fundamentals but should review specific regulatory differences.';
            } else if (accuracy >= 60) {
                scoreMessage.textContent = 'Fair Performance. Consider additional training on CASL, CAN-SPAM, and GDPR requirements.';
            } else {
                scoreMessage.textContent = 'Additional Study Recommended. Focus on understanding the core compliance principles for each jurisdiction.';
            }
        }
        
        // Update performance breakdown
        const correctCount = document.getElementById('correct-count');
        if (correctCount) {
            correctCount.textContent = correctAnswers.toString();
        }
        
        const incorrectCount = document.getElementById('incorrect-count');
        if (incorrectCount) {
            incorrectCount.textContent = incorrectAnswers.toString();
        }
        
        const accuracyPercent = document.getElementById('accuracy-percent');
        if (accuracyPercent) {
            accuracyPercent.textContent = `${accuracy}%`;
        }
        
        // Show review section for incorrect answers
        this.displayReviewSection();
    }
    
    displayReviewSection() {
        const reviewSection = document.getElementById('review-section');
        const reviewList = document.getElementById('review-list');
        
        if (!reviewSection || !reviewList) return;
        
        const incorrectAnswers = this.userAnswers.filter(answer => !answer.isCorrect);
        
        if (incorrectAnswers.length === 0) {
            reviewSection.style.display = 'none';
            return;
        }
        
        reviewSection.style.display = 'block';
        reviewList.innerHTML = '';
        
        incorrectAnswers.forEach((answer) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            const questionNumber = answer.questionIndex + 1;
            const correctOption = answer.question.options.find(option => 
                option.charAt(0) === answer.question.correct_answer
            );
            
            reviewItem.innerHTML = `
                <h4>Question ${questionNumber}</h4>
                <p><strong>Your answer:</strong> ${answer.selectedText}</p>
                <p><strong>Correct answer:</strong> ${correctOption || 'Not found'}</p>
                <p><strong>Key insight:</strong> ${answer.question.explanation}</p>
            `;
            
            reviewList.appendChild(reviewItem);
        });
    }
    
    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.selectedAnswer = null;
        this.startQuiz();
    }
    
    reviewAnswers() {
        // Show all questions with answers for review
        this.currentQuestionIndex = 0;
        this.showScreen('quiz-screen');
        this.displayReviewMode();
    }
    
    displayReviewMode() {
        // For now, restart the quiz - in a more comprehensive implementation,
        // this could show a special review mode with all answers visible
        this.startQuiz();
    }
}

// Initialize the Alliance Advisors IR Compliance Quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Alliance Advisors IR Email Marketing Compliance Quiz Loading...');
    
    // Small delay to ensure all DOM elements are ready
    setTimeout(() => {
        try {
            new AllianceComplianceQuiz();
            console.log('Quiz initialized successfully');
        } catch (error) {
            console.error('Error initializing quiz:', error);
        }
    }, 100);
});

// Additional utility functions for the Alliance brand experience
function addBrandAnimations() {
    // Add subtle entrance animations
    const welcomeContent = document.querySelector('.welcome-content');
    if (welcomeContent) {
        welcomeContent.style.opacity = '0';
        welcomeContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            welcomeContent.style.transition = 'all 0.8s ease-out';
            welcomeContent.style.opacity = '1';
            welcomeContent.style.transform = 'translateY(0)';
        }, 200);
    }
}

// Initialize brand animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addBrandAnimations, 300);
});