import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { NotificationBar } from "../NotificationBar";
import { Container } from "react-bootstrap";

export const MainLayout: React.FC = () => {
    return (
        <div>
            <Container>
                <NotificationBar />
            </Container>
            <Outlet />
        </div>
    );
};