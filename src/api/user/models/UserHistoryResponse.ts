export interface UserHistoryResponse {
  success: boolean;
  orderHistory: Array<{
    total: number;
    orderNr: string;
    orderDate: string;
  }>;
}
