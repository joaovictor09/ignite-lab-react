import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={ <Subscribe /> }/>
      <Route path="/event" element={ <Event /> }/>
      <Route path="/event/lesson/:slug" element={ <Event /> }/>
      <Route
        path="*"
        element={
          <main className="p-4">
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}