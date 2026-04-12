---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.9 Journaling
parent_control: KONF.12.1 Eingabevalidierung
stmt_target_object_category: Dateiserver
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.9 - Journaling
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Dateiserver](target_object_categories_Dateiserver_eb65007a-2247-4346-a258-c242e066a10f) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Dateisystem-Journaling |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Dateiserver SOLLTE Dateisystem-Journaling aktivieren.</span>

> [!info]- Guidance
>Beim Journaling werden Änderungen an Dateien zunächst in einem speziellen Protokoll (Journal) aufgezeichnet, bevor sie tatsächlich geschrieben werden, um Datenintegrität und Konsistenz sicherzustellen. Auf einem Dateiserver ist dies besonders wichtig, da es das Risiko von Datenverlusten bei plötzlichen Abstürzen oder Stromausfällen minimiert und eine schnelle Wiederherstellung ermöglicht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 87ccf38b-ac1d-4e14-a599-b536321b0f75 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 87ccf38b-ac1d-4e14-a599-b536321b0f75 |
