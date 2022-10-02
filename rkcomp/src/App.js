// components
import { Authenticationpage } from "./components/authentication/Authenticationpage.js"
import { Home } from "./components/home/Home.js"
import { Contactpage } from "./components/Contact.js"
import { About } from "./components/About.js"
import { Page } from "./components/Page"
import { Course } from "./components/course/Course.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { Store } from "./Store.js"
import { E500 } from "./components/Notfound404.js"

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} >
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contactpage />} />
            <Route path="course" element={<Course />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/auth/*" element={<Authenticationpage />} />
          <Route path="/error" element={<Page />}>
            <Route path="internalservererror" element={<E500 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
