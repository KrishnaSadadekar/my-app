import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error occurred:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Customize your fallback UI
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
