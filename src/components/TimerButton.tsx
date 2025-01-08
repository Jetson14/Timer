import React from 'react';

interface TimerButtonProps {
  onCancel: () => void;
  submitText?: string;
}
const TimerButton: React.FC<TimerButtonProps> = ({
  onCancel,
  submitText,
}) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t">
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors bg-blue-600 hover:bg-blue-700`}
      >
        {submitText}
      </button>
    </div>
  );
};
export default TimerButton;