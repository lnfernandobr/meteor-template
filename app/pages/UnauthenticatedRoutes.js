import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePaths } from '../infra/utils/RoutePaths';
import { Login } from './login/Login';
import { Terms } from './terms/Terms';
import { UnauthenticatedLayout } from '../templates/UnauthenticatedLayout';

export const UnauthenticatedRoutes = () => (
    <UnauthenticatedLayout>
      <Routes>
        <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UnauthenticatedLayout>
  );
