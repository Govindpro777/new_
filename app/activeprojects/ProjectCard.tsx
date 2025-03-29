
import React from 'react';

// Define types for project data
interface ProjectFile {
  id: number;
}

type ProjectStatus = 'At the Auction' | 'Drafts' | 'Revision' | 'In Process' | 'Completed' | 'Under warranty';

type BidType = {
  count: number;
  price?: string;
  isBestOffer: boolean;
} | {
  expert: {
    name: string;
    price: string;
    avatarUrl: string;
  }
};

interface ProjectCardProps {
  status: ProjectStatus;
  statusCount?: number;
  deadline: string;
  id: string;
  title: string;
  category: string;
  files?: ProjectFile[];
  bid: BidType;
  ratings?: number;
}

const StatusBadge: React.FC<{ status: ProjectStatus; count?: number }> = ({ status, count }) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'At the Auction': return 'text-red-500';
      case 'Drafts': return 'text-gray-500';
      case 'Revision': return 'text-purple-800';
      case 'In Process': return 'text-yellow-500';
      case 'Completed': return 'text-green-500';
      case 'Under warranty': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getBgColor = (status: ProjectStatus) => {
    switch (status) {
      case 'At the Auction': return 'bg-red-50';
      case 'Drafts': return 'bg-gray-50';
      case 'Revision': return 'bg-purple-50';
      case 'In Process': return 'bg-yellow-50';
      case 'Completed': return 'bg-green-50';
      case 'Under warranty': return 'bg-orange-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className={`${getStatusColor(status)} ${getBgColor(status)} rounded-md px-3 py-1 flex items-center`}>
      {status}
      {count && (
        <span className="ml-1 bg-white text-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-xs">
          {count}
        </span>
      )}
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  status,
  statusCount,
  deadline,
  id,
  title,
  category,
  files = [],
  bid,
  ratings
}) => {
  const isExpertBid = 'expert' in bid;

  return (
    <div className="bg-white rounded-lg mb-4 shadow-sm relative border">
      <div className="flex justify-between items-start p-4">
        <div className="flex flex-col space-y-4">
          {/* Status badge */}
          <StatusBadge status={status} count={statusCount} />
          
          {/* Project info section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-1">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                </svg>
                <span className="text-gray-600">Deadline</span>
              </div>
              <div className="text-gray-800 ml-7">{deadline}</div>
            </div>
            
            <div>
              <div className="flex items-center mb-1">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z" />
                </svg>
                <span className="text-gray-600">ID</span>
              </div>
              <div className="text-gray-800 ml-7">{id}</div>
            </div>
          </div>
          
          {/* Files link if available */}
          {files && files.length > 0 && (
            <div className="flex items-center">
              <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a href="#" className="text-purple-600 hover:underline">
                File({files.length})
              </a>
            </div>
          )}
          
          {/* Project title */}
          <h3 className="text-xl font-medium text-purple-900 hover:underline cursor-pointer">
            {title}
          </h3>
          
          {/* Category */}
          <p className="text-gray-600">{category}</p>
          
          {/* Ratings if available */}
          {ratings && (
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
        </div>
        
        {/* Right side - Bid information */}
        <div className="flex flex-col items-end">
          {/* Bid information */}
          {isExpertBid ? (
            <div className="flex flex-col items-end">
              <div className="text-lg font-semibold text-purple-900 mb-1">Expert</div>
              <div className="flex items-center mt-4">
                <div className="mr-2 text-right">
                  <div className="font-medium text-lg">{bid.expert.name}</div>
                  <div className="text-purple-600 font-medium">${bid.expert.price}</div>
                </div>
                <img 
                  src={bid.expert.avatarUrl} 
                  alt={bid.expert.name} 
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <button className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-full font-medium">
                Open Chat
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-end">
              <div className="mb-1 text-lg font-semibold text-purple-900">{bid.count} Bid</div>
              <div className="text-gray-600">Price</div>
              <div className="text-3xl font-semibold mt-1">{bid.price}</div>
              {bid.isBestOffer && (
                <div className="flex items-center text-green-500 font-medium mt-1">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best Offer
                </div>
              )}
              <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full font-medium">
                Check the Offers
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* More options button */}
      <button className="absolute top-4 right-4 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
    </div>
  );
};

export default ProjectCard;