import { Timestamp } from 'firebase-admin/firestore';

export type docs = {
	writer: {
		email: string;
		uid: string;
	};
	msg: string;
	createdAt: Timestamp;
};
export type docsResponse = {
	writer: {
		email: string;
		uid: string;
	};
	msg: string;
	createdAt: {
		seconds: number;
		nanoseconds: number;
	};
};
