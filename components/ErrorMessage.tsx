
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-red-50 text-red-700 rounded-lg border border-red-200">
      <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
      <h3 className="text-xl font-semibold mb-2">오류가 발생했습니다</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
