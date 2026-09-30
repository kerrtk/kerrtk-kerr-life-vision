import type { Metadata } from "next";
import "./question-list.css";
import { questionList } from "@/lib/questions";

export const metadata: Metadata = {
  title: questionList.title,
  description: questionList.lede,
  alternates: { canonical: "/question-list" },
};

export default function QuestionListPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow eyebrow-wheat">{questionList.eyebrow}</p>
          <h1>{questionList.title}</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="wrap">
          <div className="prose">
            <p>{questionList.lede}</p>
          </div>
          <ol className="qlist">
            {questionList.questions.map((item) => (
              <li key={item.q}>
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </li>
            ))}
          </ol>
          <div className="prose">
            <p>{questionList.closing}</p>
            <a
              className="outlink"
              href="https://agingwithhonor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              agingwithhonor.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
