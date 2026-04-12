---
tags:
- produktbeschreibung_zero_trust
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.5 Dynamische Zugriffskontrolle im System
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
result_reference: Zugriff
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.5 - Dynamische Zugriffskontrolle im System
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Zero_Trust|Zero Trust]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | dynamische Zugriffskontrolle | im System | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme KANN dynamische Zugriffskontrolle im System aktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugriff](result_Zugriff_00000000-0000-0000-0000-000000000000) | Mit Zugriff wird die Nutzung von Informationen oder Daten bezeichnet. Über Zugriffsberechtigungen wird geregelt, welche Personen im Rahmen ihrer Funktionen oder welche IT-Anwendungen bevollmächtigt sind, Informationen, Daten oder auch IT-Anwendungen, zu nutzen oder Transaktionen auszuführen. |

> [!info]- Guidance
>Eine dynamische Zugriffskontrolle (engl. Dynamic Access Control, DAC) bezeichnet ein Verfahren, bei dem Zugriffsentscheidungen nicht ausschließlich auf statischen Berechtigungen (z. B. Benutzerrollen oder ACLs) beruhen, sondern zusätzlich kontextabhängige Bedingungen wie Gerätezustand, Sensitivität der Daten, Standort, Zeitfenster oder Sicherheitsklassifikation auswerten. Dabei bleibt die Policy, also die zugrundeliegende Regelmenge zur Zugriffsbewertung, fest definiert und nachvollziehbar dokumentiert – lediglich die Entscheidung über den konkreten Zugriff erfolgt dynamisch anhand dieser Bedingungen. Ziel ist eine feinere Steuerung des Datenzugriffs auf Basis aktueller Risikosituationen, ohne dass Administratoren Berechtigungen manuell anpassen müssen. Solche Mechanismen können etwa verhindern, dass ein Benutzer sensible Daten von einem nicht verwalteten Endgerät ausliest, während er im internen Netz regulär Zugriff hätte. Da DAC komplex sein kann ist es zweckmäßig, auch auf Funktionen zur Auditierung und Protokollierung der DAC zu achten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ced10fd0-a74e-4376-8dac-f3381c6a9482 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | ced10fd0-a74e-4376-8dac-f3381c6a9482 |
