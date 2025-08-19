import React from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Award, Target, Zap, CheckCircle, Facebook, Twitter, Instagram, Linkedin, Youtube, X, BookOpen, Clock, User } from 'lucide-react';

export default function App() {
  // Email subscription state
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  
  // Category courses modal state
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  
  // Skills modal state
  const [showSkillsModal, setShowSkillsModal] = React.useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = React.useState('');

  // Email submit handler
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const courses = [
    {
      title: "Writing Course",
      lessons: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtmtOZMWvqgRhQK5UK8R7-rVKDanWAlye0e_2OGa4m0Sa-x1YTrM5vB3l58H06eXb29k&usqp=CAU",
      category: "Writing"
    },
    {
      title: "Writing",
      lessons: 85,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7i_8bd3TIuNrr6Ge8mf_b6sWzBc2vq1brh5JS91hFuYi16YtiaUtONZvb64O75OS3sI&usqp=CAU",
      category: "Writing"
    },
    {
      title: "Business",
      lessons: 92,
      image: "https://blogs.rsc.org/cp/files/2013/01/ajayaghosh1.jpg",
      category: "Business"
    }
  ];

  const categories = [
    {
      name: "Marketing",
      courses: 5,
      icon: "📊",
      color: "bg-orange-100"
    },
    {
      name: "Data analytics",
      courses: 3,
      icon: "📈",
      color: "bg-green-100"
    },
    {
      name: "AIML-Data Science",
      courses: 4,
      icon: "🤖",
      color: "bg-purple-100"
    },
    {
      name: "Finance",
      courses: 2,
      icon: "💰",
      color: "bg-pink-100"
    }
  ];

  // Course data for each category
  const categoryCoursesData = {
    "Marketing": [
      {
        title: "Digital Marketing Fundamentals",
        instructor: "Prof. Rajesh Kumar",
        duration: "8 weeks",
        lessons: 24,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
        description: "Master digital marketing strategies including SEO, social media, and content marketing."
      },
      {
        title: "Social Media Marketing",
        instructor: "Dr. Priya Sharma",
        duration: "6 weeks",
        lessons: 18,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        description: "Learn to create engaging social media campaigns across all major platforms."
      },
      {
        title: "Content Marketing Strategy",
        instructor: "Mr. Arun Patel",
        duration: "10 weeks",
        lessons: 30,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=250&fit=crop",
        description: "Develop compelling content strategies that drive engagement and conversions."
      },
      {
        title: "Email Marketing Mastery",
        instructor: "Ms. Sneha Reddy",
        duration: "5 weeks",
        lessons: 15,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
        description: "Create effective email campaigns that convert subscribers into customers."
      },
      {
        title: "Marketing Analytics",
        instructor: "Dr. Vikram Singh",
        duration: "7 weeks",
        lessons: 21,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        description: "Analyze marketing data to optimize campaigns and improve ROI."
      }
    ],
    "Data analytics": [
      {
        title: "Python for Data Analysis",
        instructor: "Dr. Meera Joshi",
        duration: "12 weeks",
        lessons: 36,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=250&fit=crop",
        description: "Learn Python programming for data manipulation and analysis."
      },
      {
        title: "Statistical Analysis with R",
        instructor: "Prof. Suresh Nair",
        duration: "10 weeks",
        lessons: 30,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        description: "Master statistical analysis using R programming language."
      },
      {
        title: "Data Visualization",
        instructor: "Ms. Kavya Menon",
        duration: "8 weeks",
        lessons: 24,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        description: "Create compelling visualizations using Tableau and Power BI."
      }
    ],
    "AIML-Data Science": [
      {
        title: "Machine Learning Foundations",
        instructor: "Dr. Ramesh Gupta",
        duration: "14 weeks",
        lessons: 42,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        description: "Comprehensive introduction to machine learning algorithms and applications."
      },
      {
        title: "Deep Learning with TensorFlow",
        instructor: "Prof. Anita Desai",
        duration: "16 weeks",
        lessons: 48,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        description: "Build neural networks and deep learning models using TensorFlow."
      },
      {
        title: "Natural Language Processing",
        instructor: "Dr. Karthik Raman",
        duration: "12 weeks",
        lessons: 36,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        description: "Process and analyze text data using advanced NLP techniques."
      },
      {
        title: "Computer Vision",
        instructor: "Ms. Divya Krishnan",
        duration: "10 weeks",
        lessons: 30,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
        description: "Learn image processing and computer vision applications."
      }
    ],
    "Finance": [
      {
        title: "Financial Analysis & Modeling",
        instructor: "Prof. Arjun Malhotra",
        duration: "12 weeks",
        lessons: 36,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        description: "Master financial modeling and valuation techniques."
      },
      {
        title: "Investment Banking Fundamentals",
        instructor: "Dr. Sanjay Agarwal",
        duration: "10 weeks",
        lessons: 30,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
        description: "Learn the essentials of investment banking and capital markets."
      }
    ]
  };

  const skills = [
    {
      title: "Interactive Learning",
      description: "Engage with live sessions, case studies, and real-world projects",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Industry-Relevant Curriculum",
      description: "Stay ahead with courses designed to meet today's job market demands",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Flexible Education",
      description: "Learn anytime, anywhere with self-paced and live classes",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
  name: "Dr. Anuradha Ramesh",
  text: "At SRM Online, we focus on blending theory with practical applications so that students can directly apply concepts in their careers.",
  avatar: "https://www.shutterstock.com/image-photo/happy-young-indian-arabic-businessman-260nw-2187607295.jpg",
  rating: 5
},
{
  name: "Prof. K. Suresh Kumar",
  text: "Our online MBA is designed to give students flexibility while maintaining the same rigor and quality as the on-campus program.",
  avatar: "https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg",
  rating: 5
},
{
  name: "Dr. Meenakshi Sundaram",
  text: "With industry-oriented projects and real-world case studies, students gain skills that employers truly value.",
  avatar: "https://www.shutterstock.com/image-photo/e-learning-during-covid-lockdown-260nw-1908771583.jpg",
  rating: 5
},
{
  name: "Prof. Lakshmi Narayanan",
  text: "We ensure every student has access to continuous mentorship and guidance throughout their MBA journey.",
  avatar: "https://edsurge.imgix.net/uploads/post/image/14173/instructor_teaching_remotely_via_smartphone-1620245868.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop",
  rating: 5
},
{
  name: "Dr. Priya Chandrasekar",
  text: "The SRM Online MBA combines academic depth with digital flexibility, helping learners balance work and study seamlessly.",
  avatar: "https://www.shutterstock.com/image-photo/indian-young-teacher-man-teaching-260nw-1933777379.jpg",
  rating: 5
}

  ];

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Close modal
  const closeModal = () => {
    setSelectedCategory(null);
  };

  // Handle skills click
  const handleSkillsClick = (e) => {
    e.preventDefault();
    console.log("Skills clicked!");
    setShowSkillsModal(true);
  };

  // Close skills modal
  const closeSkillsModal = () => {
    setShowSkillsModal(false);
  };

  // Handle search
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    // Find matching category (case insensitive)
    const matchedCategory = categories.find(category => 
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (matchedCategory) {
      setSelectedCategory(matchedCategory);
      setSearchQuery(''); // Clear search after successful match
    } else {
      // If no exact match, show all categories that contain the search term
      alert(`No exact match found for "${searchQuery}". Available categories: ${categories.map(c => c.name).join(', ')}`);
    }
  };

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <style>{`
        @keyframes continuousZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        
        @keyframes sequentialZoom {
          0%, 20% { transform: scale(1); }
          10% { transform: scale(1.2); }
        }
        
        .hero-text-zoom span:nth-child(1) {
          animation: sequentialZoom 3s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .hero-text-zoom span:nth-child(2) {
          animation: sequentialZoom 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .hero-text-zoom span:nth-child(3) {
          animation: sequentialZoom 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .avatar-container {
          position: relative;
          display: inline-block;
        }
        
        .avatar-preview {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 50;
          border: 3px solid white;
        }
        
        .avatar-container:hover .avatar-preview {
          opacity: 1;
          visibility: visible;
        }
        
        .avatar-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 1rem;
          max-width: 6xl;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
      `}</style>
      
      {/* Header */}
      <header className="px-8 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">SRM Virtual Academy</div>
          <nav className="hidden md:flex space-x-8 text-gray-600">
            <a href="#" className="hover:text-gray-900">Categories</a>
            <a href="#" onClick={handleSkillsClick} className="hover:text-gray-900">Skills</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a 
    href="https://www.youtube.com/watch?v=quh8VvOilB8" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
  >
    Start free
  </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-8 hero-text-zoom">
                <span className="block">Watch.</span>
                <span className="block">Learn.</span>
                <span className="block">Grow.</span>
              </h1>
              
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 mb-8">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find your passion (e.g., Marketing, Data, Finance)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-500"
                />
                <button 
                  type="submit"
                  className="bg-green-500 text-white px-8 py-3 rounded-r-lg hover:bg-green-600 transition-colors"
                >
                  Go
                </button>
              </form>
            </div>

            <div className="flex space-x-4">
              {courses.map((course, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden w-80 h-48 cursor-pointer group">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unlimited access to 100+ instructors
          </h2>
          
          <div className="flex justify-center space-x-8 mb-12 text-sm text-gray-600">
            <span className="border-b-2 border-gray-900 pb-2">All categories</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                onClick={() => handleCategoryClick(category)}
                className={`${category.color} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.courses} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Modal */}
      {showSkillsModal && (
        <div className="modal-overlay" onClick={closeSkillsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">All Skills Categories</h2>
                <button 
                  onClick={closeSkillsModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    onClick={() => {
                      closeSkillsModal();
                      handleCategoryClick(category);
                    }}
                    className={`${category.color} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.courses} courses</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{selectedCategory.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedCategory.name} Courses</h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCoursesData[selectedCategory.name]?.map((course, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative h-48">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{course.instructor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-medium">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learn Anytime, Anywhere with SRM Online Education
              </h2>
              
              <p className="text-gray-600 mb-8">
                Online learning empowers you to balance education with your personal and professional life. 
          With flexible schedules, interactive classes, and industry-relevant curriculum, you can gain 
          the skills needed to advance your career without pausing your daily routine.
              </p>

              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{skill.title}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-500 text-white p-6 rounded-2xl mb-4">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-orange-400 text-white p-6 rounded-2xl ml-20 mb-6">
                <div className="text-3xl font-bold">250+</div>
                <div className="text-sm">COMPLETE COURSE</div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/online_learning_1.jpg?itok=SNJfPWq7" 
                  alt="Person working on laptop"
                  className="w-full h-72 object-cover"
                  style={{
                    animation: 'continuousZoom 1s ease-in-out infinite alternate'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What our customer say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="avatar-container">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 hover:ring-orange-400 transition-all duration-200"
                    />
                    <div className="avatar-preview">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                      />
                    </div>
                  </div>
                  <span className="font-medium text-sm text-gray-900">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-50 px-8 py-16 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-orange-500">SRM Virtual Academy</div>
              <p className="text-gray-600 text-sm">
                © 2025 SRM Virtual Academy Logo. All rights reserved
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Find position</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>Skills</div>
                <div>Customer</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <h3 className="space-y-3 text-sm text-gray-600">Customer</h3>
              
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Join our community</h3>
              {!isSubscribed ? (
                <div className="flex space-x-2 mb-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:border-gray-500"
                  />
                  <button 
                    onClick={handleEmailSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-green-600 transition-colors"
                  >
                    Go
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2 mb-4 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 text-sm font-medium">Successfully subscribed!</span>
                </div>
              )}
              
              <div className="flex space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}