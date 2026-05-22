/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import AdvocatePortal from './components/AdvocatePortal';
import LoginPage from './components/LoginPage';

export default function App() {
  const [user, setUser] = useState<any>(null);

  if (!user) {
    return <LoginPage onLogin={(loggedUser) => setUser(loggedUser)} />;
  }

  return <AdvocatePortal onBack={() => setUser(null)} />;
}
