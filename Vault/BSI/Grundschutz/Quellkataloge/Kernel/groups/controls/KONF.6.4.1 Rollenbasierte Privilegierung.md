---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.4.1 Rollenbasierte Privilegierung
parent_control: KONF.6.4 Privilegierte Systemfunktionen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.4.1 - Rollenbasierte Privilegierung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

** Übergeordnetes Control: ** [KONF.6.4 Privilegierte Systemfunktionen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.6.4%20Privilegierte%20Systemfunktionen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | rollenbasiertes Berechtigungsmanagement |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme KANN rollenbasiertes Berechtigungsmanagement aktivieren.</span>

> [!info]- Guidance
>Rollenbasierte Administration schränkt die Berechtigungen administrativer Zugangskonten anhand von Rollen so ein, dass nur die jeweils erforderlichen Funktionen freigeschaltet sind. Dies kann z.B. mit Windows PowerShell Just Enough Administration (JEA) oder SELinux, AppArmor oder Sudoers umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b20ab43c-96f3-4bc4-8a4c-1dca837bb41f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | b20ab43c-96f3-4bc4-8a4c-1dca837bb41f |
