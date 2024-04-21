import { createFileRoute } from '@tanstack/react-router';
import classNames from 'classnames';
import { useState } from 'react';

export const Route = createFileRoute('/testing/autocomplete')({
    component: Autocomplete,
});

const commands = ['foo', 'bar', 'foobar', 'meow', 'mrrp', 'foomeow', 'foomrrp'];

function Autocomplete() {
    const [draft, setDraft] = useState(['']);
    const [suggestionIndex, setSuggestionIndex] = useState<null | number>(null);

    const suggestions = commands.filter((text) => text.startsWith(draft[0]));

    return (
        <div className="h-[50vh] w-1/2 m-auto flex flex-col justify-end">
            <ul>
                {suggestions.map((text, key) => (
                    <li key={key} className={classNames('p-1', key === suggestionIndex && 'text-white bg-black')}>
                        {text}
                    </li>
                ))}
            </ul>
            <textarea
                className="border-solid border-black border-2 w-full h-8 resize-none"
                value={(suggestionIndex === null ? draft : [suggestions[suggestionIndex], ...draft.slice(1)]).join(' ')}
                onChange={(e) => {
                    setSuggestionIndex(null);
                    setDraft(e.target.value.split(/\s+/g));
                }}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                        e.preventDefault();
                        setSuggestionIndex((current) => {
                            if (suggestions.length === 0) return null;
                            if (current === null) return 0;
                            const next = current - 1;
                            if (next < 0) return suggestions.length - 1;
                            return next;
                        });
                    }

                    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                        e.preventDefault();
                        setSuggestionIndex((current) => {
                            if (suggestions.length === 0) return null;
                            if (current === null) return 0;
                            const next = current + 1;
                            if (next >= suggestions.length) return 0;
                            return next;
                        });
                    }
                }}
            />
        </div>
    );
}

export default Autocomplete;
