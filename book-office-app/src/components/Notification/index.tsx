import React, { useEffect } from "react";
import "./Notification.css";
import { useDispatch } from "../../core/store";
import { INotification, deleteNotification } from "../../core/store/slices/appSlice";
import { Alert } from "react-bootstrap";
interface NotificationBarProps {
    notifyInfo: INotification;
}

export const Notification: React.FC<NotificationBarProps> = ({ notifyInfo, }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(deleteNotification(notifyInfo.id));
        }, 2000);
        return () => clearTimeout(timeout);
    }, [dispatch, notifyInfo]);
    return (
        <>
            <Alert variant={notifyInfo.isError ? "danger" : "success"} className="m-2 text-center">
                {notifyInfo.message}
            </Alert>
        </>
    )
};