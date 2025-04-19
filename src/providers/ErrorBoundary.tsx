'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  errorMessage: string;
};

/**
 * 예기치 못한 오류 발생 시 fallback UI를 보여주는 에러 바운더리 컴포넌트
 */
class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      errorMessage: error.message || '알 수 없는 에러가 발생했습니다.',
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-4">문제가 발생했어요.</h2>
          <p className="text-gray-600">
            어떤 상황인지 공유해주시면 빠르게 도와드릴게요.
          </p>
          <p className="text-gray-800 mt-2 mb-6 font-semibold">
            사유: {this.state.errorMessage}
          </p>
          <button
            onClick={this.handleReset}
            className="bg-midnight-900 text-white px-4 py-2 rounded font-bold cursor-pointer"
          >
            다시 시도
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
