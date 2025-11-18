/**
 * Application Configuration Constants
 * Centralized configuration for the resume analysis application
 */

// Application settings
export const APP_CONFIG = {
  NAME: 'Resumind',
  DESCRIPTION: 'Smart feedback for your dream job!',
  VERSION: '1.0.0',
} as const;

// File upload restrictions
export const FILE_UPLOAD = {
  // Accepted file types for resume upload
  ACCEPTED_TYPES: ['.pdf', '.doc', '.docx'] as const,
  // Maximum file size in bytes (5MB)
  MAX_SIZE: 5 * 1024 * 1024,
  // Maximum file size in human-readable format
  MAX_SIZE_MB: '5MB',
} as const;

// Score thresholds for feedback categories
export const SCORE_THRESHOLDS = {
  EXCELLENT: 85,
  GOOD: 70,
  FAIR: 50,
  POOR: 0,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: `File size exceeds ${FILE_UPLOAD.MAX_SIZE_MB}. Please upload a smaller file.`,
  INVALID_FILE_TYPE: `Invalid file type. Please upload a PDF or Word document.`,
  UPLOAD_FAILED: 'Failed to upload file. Please try again.',
  AUTH_REQUIRED: 'Please log in to continue.',
  ANALYSIS_FAILED: 'Failed to analyze resume. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  UPLOAD_SUCCESS: 'Resume uploaded successfully!',
  ANALYSIS_COMPLETE: 'Resume analysis completed!',
  AUTH_SUCCESS: 'Successfully logged in!',
} as const;
