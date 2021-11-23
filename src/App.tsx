import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionContext } from './TransactionContext';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionContext.Provider value={[]}>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </TransactionContext.Provider>
  );
}
