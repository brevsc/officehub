export declare global {
  type LoginState = {
    success: boolean;
    error?: string;
    user?: string;
  };
}
