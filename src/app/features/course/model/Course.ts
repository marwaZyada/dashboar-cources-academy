export interface Course {
  id: number;
  courseName: string;
  instructorName: string;
  category: number;
  duration: number;
  price: number;
  status: string;
  description: string;
  createdDate: string| Date;
}
export interface Category {
  id: number;
  name: string;
}