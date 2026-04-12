---
tags:
- zero_trust
- ber512-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.5.1.2 JIT‑/JEA‑Berechtigungen
parent_control: BER.5.1 Prinzip der geringsten Berechtigungen
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Inventar Berechtigungen
result_reference: Zugriff
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.5.1.2 - JIT‑/JEA‑Berechtigungen
Tag: [[tags_Zero Trust|Zero Trust]]
Gruppe: [BER.5 Berechtigungsmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.5%20Berechtigungsmanagement.md)
---

** Übergeordnetes Control: ** [BER.5.1 Prinzip der geringsten Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.5.1%20Prinzip%20der%20geringsten%20Berechtigungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Berechtigungsmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.5%20Berechtigungsmanagement.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Berechtigung zum Zeitpunkt des Zugriffs | für {{besonders kritische Ressourcen oder Zugänge}} | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Inventar Berechtigungen](documentation_guidelines_Inventar Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung KANN die Berechtigung zum Zeitpunkt des Zugriffs für {{ insert: param, ber.5.1.2-prm1 }} aktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugriff](result_Zugriff_00000000-0000-0000-0000-000000000000) | Mit Zugriff wird die Nutzung von Informationen oder Daten bezeichnet. Über Zugriffsberechtigungen wird geregelt, welche Personen im Rahmen ihrer Funktionen oder welche IT-Anwendungen bevollmächtigt sind, Informationen, Daten oder auch IT-Anwendungen, zu nutzen oder Transaktionen auszuführen. |

> [!info]- Guidance
>„JIT‑/JEA‑Berechtigungen“ (Just‑In‑Time/Just‑Enough‑Access) ist die zeitlich und inhaltlich begrenzte Vergabe von Rechten zum Zeitpunkt eines Zugriffs auf eine Ressource. Dies kann insbesondere für privilegierte Zugangskonten und Administrationszugänge sinnvoll sein, um erhöhte Rechte nur genau dann zu ermöglichen, wenn sie wirklich erforderlich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e549f464-b2fb-42a1-83b9-21bd3bb0f3cf |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e549f464-b2fb-42a1-83b9-21bd3bb0f3cf |
