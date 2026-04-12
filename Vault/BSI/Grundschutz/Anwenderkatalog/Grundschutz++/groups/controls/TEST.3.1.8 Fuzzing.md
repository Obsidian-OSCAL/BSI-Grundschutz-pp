---
tags:
- error_handling
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.8 Fuzzing
parent_control: TEST.3.1 Sicherheitstest
stmt_modal_verb: KANN
stmt_action_word: testen
stmt_documentation: Freigabeplan
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.8 - Fuzzing
Tag: [[tags_Error_Handling|Error Handling]]
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)*<br> *  &rarr; [Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md) *</div> | [Änderungen und Tests](practices_Änderungen_und_Tests_554ba2da-7317-4792-8548-141250039260) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Stabilität gegen Fehlerzustände oder Abstürze bei der Eingabe großer Mengen an Zufallsdaten |  | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Änderungen und Tests KANN die Stabilität gegen Fehlerzustände oder Abstürze bei der Eingabe großer Mengen an Zufallsdaten testen.</span>

> [!info]- Guidance
>Fuzzing ist eine automatisierte Softwaretestmethode, mit der unerwartete Schwachstellen und Fehler in Anwendungen durch Eingabe zufälliger, unerwarteter oder ungültiger Daten aufgedeckt werden können. Der Hauptzweck besteht darin, Grenzbedingungen zu prüfen und Programmabstürze, Speicherlecks oder sicherheitskritische Fehler wie Buffer Overflows zu identifizieren, bevor Angreifer diese ausnutzen können. Kann durch spezialisierte Tools oder kontinuierliches Fuzzing in der CI/CD-Pipeline umgesetzt werden. Für einen effektiven Einsatz empfiehlt es sich, mit strukturiertem Fuzzing zu beginnen, das auf bekannten Protokollspezifikationen oder Datenformaten basiert, Fuzzing-Tests in die frühen Phasen des Entwicklungszyklus zu integrieren, alle gefundenen Fehler systematisch zu dokumentieren und zu beheben, sowie regelmäßig neue Testfälle auf Basis entdeckter Schwachstellen zu entwickeln, um die Testabdeckung kontinuierlich zu verbessern.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5bd70855-3756-4f70-b5d5-98e5211cd1ed |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 5bd70855-3756-4f70-b5d5-98e5211cd1ed |
