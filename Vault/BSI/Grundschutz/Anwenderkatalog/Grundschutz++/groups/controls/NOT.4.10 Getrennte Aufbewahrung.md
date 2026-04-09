---
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.10 Getrennte Aufbewahrung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.10 - Getrennte Aufbewahrung
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Notfallplanung (NOT)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT%20Notfallplanung.md)**<br> ***  &rarr; [Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md) *** |  | SOLLTE | die Datensicherung getrennt von den Originaldaten |  | platzieren | Datensicherungskonzept | >Notfallplanung SOLLTE die Datensicherung getrennt von den Originaldaten platzieren.

> [!info]- Guidance
>Originaldaten (engl. primary data) sind die produktiven oder operativen Daten, die unmittelbar für die laufenden Geschäftsprozesse verwendet werden. Die Anforderung adressiert damit, dass Kopien oder Sicherungen nicht am gleichen Ort wie die produktiven Systeme und deren Speicher verbleiben. Hintergrund ist, dass ein Vorfall wie ein Brand, ein Wasserschaden oder ein gezielter Einbruch gleichzeitig sowohl die produktiven Systeme als auch die dort aufbewahrten Sicherungen betreffen könnte, wodurch eine Wiederherstellung unmöglich wäre. Die physische Trennung kann dagegen die Verfügbarkeit und Wiederanlaufbarkeit der Daten nach einem Schadensereignis sicherstellen. Die Anforderung gilt auch für die Aufbewahrung bei Cloud-Diensten: Eine Aufbewahrung der Datensicherung bei einem Dienstleister, bei dem auch die Originaldaten liegen, erfüllt die Anforderung NICHT. Bei der getrennten Aufbewahrung von Datensicherung sind häufig praktische und sicherheitsrelevante Herausforderungen zu beachten: Ein ausgelagerter Speicherort ist in gleichem Maße schutzbedürftig gegenüber unbefugtem Zugriff wie der Standort der Originaldaten, da sich darauf oft vollständige und aktuelle Kopien sensibler Informationen befinden. Zudem sind längere Wiederanlaufzeiten möglich, wenn der externe Standort nicht unmittelbar erreichbar ist oder wenn logistische Verzögerungen beim Zugriff auf die ausgelagerten Datenträger auftreten. Auch die Gefahr von Inkonsistenzen steigt, wenn Backups zwar ausgelagert, aber nicht regelmäßig synchronisiert oder bei der Überprüfung beachtet werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c272387e-88de-4794-a223-c502c136a501 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c272387e-88de-4794-a223-c502c136a501 |
