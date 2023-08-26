import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from '../infra/utils/RoutePaths';
import { Login } from './login/Login';
import { UnauthenticatedLayout } from '../templates/UnauthenticatedLayout';
import { Policies } from './policies/Policies';

export const UnauthenticatedRoutes = () => (
  <UnauthenticatedLayout>
    <Routes>
      <Route path={`/${RoutePaths.POLICIES}`} element={<Policies />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </UnauthenticatedLayout>
);
