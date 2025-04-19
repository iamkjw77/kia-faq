'use client';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error('Global Error:', error);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4">
        문제가 발생했어요. <br />
      </h2>
      <p className="text-gray-600">
        어떤 상황인지 공유해주시면 빠르게 도와드릴게요.
      </p>
      <p className="text-gray-800 mt-2 mb-6 font-semibold">
        사유: {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="bg-midnight-900 text-white px-4 py-2 rounded font-bold cursor-pointer"
      >
        다시 시도
      </button>
    </div>
  );
};

export default GlobalError;
