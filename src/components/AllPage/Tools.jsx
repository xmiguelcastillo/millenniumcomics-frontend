import CodeFrame from "./CodeFrame.jsx";

export default function Tools() {
  return (
    <div
      className="
    grid
    grid-cols-2
    md:grid-cols-2
    gap-8
  
    w-[80%]
    max-w-[1200px]
    mx-auto
    my-10
"
    >
      <div className="flex flex-col items-center text-center">
        <div className="font-bold mb-1">Backend</div>
        <CodeFrame
          name="Java"
          link="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
        />
        <CodeFrame
          name="Spring Boot"
          link="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
        />
        <CodeFrame
          name="Postgres"
          link="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
        />
        <CodeFrame
          name="Supabase"
          link="https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="font-bold mb-1">Frontend</div>
        <CodeFrame
          name="Javascript"
          link="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
        />
        <CodeFrame
          name="React"
          link="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
        />
        <CodeFrame
          name="Tailwind"
          link="https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000"
        />
        <CodeFrame
          name="Three.js"
          link="https://img.icons8.com/?size=100&id=btI6pXJ4oe2T&format=png&color=000000"
        />
      </div>
    </div>
  );
}

