import { ProblemDetails as ProblemDetails_1 } from "@/infrastructure/apiClients/apiClientBase/ProblemDetails";

export class ApiResponse<T> {
    public response: T | null;
    public error: ProblemDetails_1 | null;
    public status: number;

    constructor(response: T | null, error: ProblemDetails_1 | null, status: number) {
        this.response = response;
        this.error = error;
        this.status = status;
    }

    public get isSuccess(): boolean {
        return this.status >= 200 && this.status < 300;
    }
}