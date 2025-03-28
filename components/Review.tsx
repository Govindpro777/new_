import React from 'react';

const ReviewRatings = ({ 
  trustpilotImage = null, 
  sitejabberImage = null, 
  expertBuddyImage = null 
}) => {
  return (
    <div className="bg-gray-50 rounded-lg px-6 py-4 flex items-center justify-between max-w-4xl mx-auto shadow-sm">
      <div className="text-gray-700 font-medium text-sm">
        150+ Students Trusted Us To Write Their Papers
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Trustpilot Section */}
        <div className="flex items-center space-x-2">
          {trustpilotImage ? (
            <img 
              src={trustpilotImage} 
              alt="Trustpilot Logo" 
              className="h-6 w-6"
            />
          ) : (
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          )}
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-1">Trustpilot</span>
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill={star <= 4 ? "currentColor" : "none"}
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm ml-1 text-gray-600">4.7</span>
          </div>
        </div>

        {/* Sitejabber Section */}
        <div className="flex items-center space-x-2">
          {sitejabberImage ? (
            <img 
              src={sitejabberImage} 
              alt="Sitejabber Logo" 
              className="h-6 w-6"
            />
          ) : (
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          )}
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-1">Sitejabber</span>
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill={star <= 4 ? "currentColor" : "none"}
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm ml-1 text-gray-600">4.0</span>
          </div>
        </div>

        {/* ExpertBuddy Section */}
        <div className="flex items-center space-x-2">
          {expertBuddyImage ? (
            <img 
              src={expertBuddyImage} 
              alt="ExpertBuddy Logo" 
              className="h-6 w-6"
            />
          ) : (
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          )}
          <div className="flex items-center">
            <span className="text-sm font-semibold mr-1">ExpertBuddy</span>
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map((star) => (
                <svg 
                  key={star} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm ml-1 text-gray-600">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRatings;