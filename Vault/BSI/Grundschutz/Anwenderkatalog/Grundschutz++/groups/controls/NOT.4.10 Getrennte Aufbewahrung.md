---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.10 Getrennte Aufbewahrung
stmt_modal_verb: SOLLTE
stmt_action_word: platzieren
stmt_documentation: Datensicherungskonzept
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.10 - Getrennte Aufbewahrung
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Notfallplanung (NOT)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT%20Notfallplanung.md)*<br> *  &rarr; [Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md) *</div> | [Notfallplanung](practices_Notfallplanung_723219b0-d58a-432d-bce2-2bf16c5874ae) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Datensicherung getrennt von den Originaldaten |  | [platzieren](action_words_platzieren_fec950b7-8c2d-4060-b4ff-d7276f0f9a56) | [Datensicherungskonzept](documentation_guidelines_Datensicherungskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Notfallplanung SOLLTE die Datensicherung getrennt von den Originaldaten platzieren.</span>

> [!info]- Guidance
>Originaldaten (engl. primary data) sind die produktiven oder operativen Daten, die unmittelbar für die laufenden Geschäftsprozesse verwendet werden. Die Anforderung adressiert damit, dass Kopien oder Sicherungen nicht am gleichen Ort wie die produktiven Systeme und deren Speicher verbleiben. Hintergrund ist, dass ein Vorfall wie ein Brand, ein Wasserschaden oder ein gezielter Einbruch gleichzeitig sowohl die produktiven Systeme als auch die dort aufbewahrten Sicherungen betreffen könnte, wodurch eine Wiederherstellung unmöglich wäre. Die physische Trennung kann dagegen die Verfügbarkeit und Wiederanlaufbarkeit der Daten nach einem Schadensereignis sicherstellen. Die Anforderung gilt auch für die Aufbewahrung bei Cloud-Diensten: Eine Aufbewahrung der Datensicherung bei einem Dienstleister, bei dem auch die Originaldaten liegen, erfüllt die Anforderung NICHT. Bei der getrennten Aufbewahrung von Datensicherung sind häufig praktische und sicherheitsrelevante Herausforderungen zu beachten: Ein ausgelagerter Speicherort ist in gleichem Maße schutzbedürftig gegenüber unbefugtem Zugriff wie der Standort der Originaldaten, da sich darauf oft vollständige und aktuelle Kopien sensibler Informationen befinden. Zudem sind längere Wiederanlaufzeiten möglich, wenn der externe Standort nicht unmittelbar erreichbar ist oder wenn logistische Verzögerungen beim Zugriff auf die ausgelagerten Datenträger auftreten. Auch die Gefahr von Inkonsistenzen steigt, wenn Backups zwar ausgelagert, aber nicht regelmäßig synchronisiert oder bei der Überprüfung beachtet werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c272387e-88de-4794-a223-c502c136a501 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c272387e-88de-4794-a223-c502c136a501 |
