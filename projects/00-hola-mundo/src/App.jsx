import './App.css'

export function App() {
return (
    <article style={{ display: 'flex', alignItems: 'center', color:'#fff'}}>
        <header>
            <img alt="Un avatar cualquiera" src="https://unavatar.io/google/netflix.com"/>
            <div>
                <strong>Roberto Sanz</strong>
                <span>@robertsd</span>
            </div>
        </header>

        <aside>
            <button>
                Seguir
            </button>
        </aside>
    </article>
)
}