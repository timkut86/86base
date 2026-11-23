import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support - 86base",
  description: "",
};
export default function Support(){
    return(<>
     <main>
        <h2 className="fw5 title">Support</h2>
        <div className="text_1">
            <h3 className="fw5">How can I support 86base?</h3>
            <p className="fw4">You can support 86base by:</p>
            <ul className="it fw4">
              <li>subscribing to Telegram and YouTube chanells timkut86</li>
              <li>following timkut86 on GitHub</li>
              <li>starring 86base's services on GitHub</li>
            </ul>
        </div>
     </main>
    </>)
}