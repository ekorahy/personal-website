import FavoriteTechList from "@/components/molecule/FavoriteTechList";
import HeaderPage from "@/components/molecule/HeaderPage";

export default function Page() {
  return (
    <article>
      <HeaderPage title="About" description="Short story about me." />
      <p className="mt-4">
        I am a graduate of the Informatics study program at Universitas Persada
        Indonesia Y.A.I. During my studies, I learned a lot, especially in the
        discipline of software engineering. I have experience in developing
        desktop applications using Java, full-stack web development using PHP
        Native, Yii Framework, and JavaScript libraries or frameworks such as
        React.js and Express.js. Additionally, I have experience in mobile
        application development with Flutter (multi-platform) and Kotlin
        (Android native), also developing machine learning models using Python
        and Tensorflow.
      </p>
      <p className="mt-4">
        However, in the past few years, I have decided to transition from being
        a generalist to specializing in front-end web development. I see a
        significant market opportunity in this field, and because of my passion
        for the visual aspects, I truly enjoy working in this
        area.
      </p>
      <div className="mt-4">
        <h3 className="font-bold">My Current Favorite Tech Stack</h3>
        <FavoriteTechList />
      </div>
    </article>
  );
}
