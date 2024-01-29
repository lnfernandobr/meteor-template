import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedLayout } from '../templates/AuthenticatedLayout';
import { RoutePaths } from '../infra/utils/RoutePaths';
import { Home } from './home/Home';
import { Profile } from './profile/Profile';
import { NotFound } from './notFound/NotFound';
import { Policies } from './policies/Policies';

export const AuthenticatedRoutes = () => (
  <AuthenticatedLayout>
    <Routes>
      <Route path={RoutePaths.ROOT} element={<Home />} />
      <Route path={`/${RoutePaths.POLICIES}`} element={<Policies />} />
      <Route path={`/${RoutePaths.PROFILE}`} element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthenticatedLayout>
);
