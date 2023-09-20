import React, { lazy, useEffect } from "react";
import Layout  from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "../components/GlobalStyles";
import ScrollToTop from "../utils/scrollToTop";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Toaster } from 'react-hot-toast';
import './datepicker.css';

const AftercarePage = lazy(() => import('../pages/Aftercare'));
const HomePage = lazy(() => import('../pages/Home'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const ServicesPage = lazy(() => import('../pages/ServicesPrices'));
const WaiverformPage = lazy(() => import('../pages/Waiverform'));
const BookingPage = lazy(() => import('../pages/Booking'));
const FAQPage = lazy(() => import('../pages/FAQ'));
const ContactPage = lazy(() => import('../pages/Contact'));
const CompletionPage = lazy(() => import('../pages/Completion'));
const Service = lazy(() => import('../pages/Service'));
const Client = lazy(() => import('../components/ClientForm'));
const Schedule = lazy(() => import('../components/Schedule'));
const Payment = lazy(() => import('../components/Payment'));
const Login = lazy(() => import('../components/LoginForm'));
const Admin = lazy(() => import('../pages/Admin'));
const DaySchedule = lazy(() => import('./DaySchedule'));
const MonthSchedule = lazy(() => import('../components/MonthSchedule'));
const AllSchedule = lazy(() => import('../components/AllSchedule'));

export const App = () => {

  return (
    <>
    <GlobalStyle/>
    <ScrollToTop/>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/aftercare'  element={<AftercarePage/>}/>
        <Route path='/portfolio'  element={<PortfolioPage/>}/>
        <Route path='/services'   element={<ServicesPage/>}/>
        <Route path='/waiverform'   element={<WaiverformPage/>}/>
        <Route path='/booking'   element={<BookingPage />}>
          <Route path="service" element={<Service/>}/>
          <Route path="client-info" element={<Client/>} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="payment" element={<Payment   />} />
        </Route>
        <Route path='/faq'   element={<FAQPage/>}/>
        <Route path='/contact'   element={<ContactPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      <Route path="/booking-succeeded" element={<CompletionPage/>}/>
      <Route path="/gatita/admin" element={<PrivateRoute component={<Admin/>} redirectTo="/gatita/login"/>}>
          <Route path="appointmentsbyday" element={<DaySchedule/>}/>
          <Route path="appointmentsbymonth" element={<MonthSchedule/>}/>
          <Route path="appointmentsall" element={<AllSchedule/>}/>
      </Route>
      <Route path="/gatita/login" element={<RestrictedRoute component={<Login/>} redirectTo="/gatita/admin/appointmentsbyday"/>}/>
    </Routes>
    </>
   
  );
};
