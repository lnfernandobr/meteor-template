import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedLayout } from '../templates/AuthenticatedLayout';
import { RoutePaths } from '../infra/utils/RoutePaths';
import { Home } from './home/Home';
import { Terms } from './terms/Terms';
import { Profile } from './profile/Profile';
import { NotFound } from './notFound/NotFound';

export const AuthenticatedRoutes = () => (
    <AuthenticatedLayout>
      <Routes>
        <Route path={RoutePaths.ROOT} element={<Home />} />
        <Route path={`/${RoutePaths.TERMS}`} element={<Terms />} />
        <Route path={`/${RoutePaths.PROFILE}`} element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthenticatedLayout>
  );
