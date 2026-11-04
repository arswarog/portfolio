import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '@/components/scroll-to-top';
import { Case1Page } from '@/pages/cases/case-1';
import { HomePage } from '@/pages/home-page';
import { NotFoundPage } from '@/pages/not-found-page';

export function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/cases/case-1"
                    element={<Case1Page />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}
