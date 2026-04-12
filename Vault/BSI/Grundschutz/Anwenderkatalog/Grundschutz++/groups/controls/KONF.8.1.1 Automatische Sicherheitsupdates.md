---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.8.1.1 Automatische Sicherheitsupdates
parent_control: KONF.8.1 Automatische Überprüfung
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: installieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.8.1.1 - Automatische Sicherheitsupdates
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.8 Sicherheitsupdates](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.8%20Sicherheitsupdates.md)
---

** Übergeordnetes Control: ** [KONF.8.1 Automatische Überprüfung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.8.1%20Automatische%20Überprüfung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Sicherheitsupdates](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.8%20Sicherheitsupdates.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Sicherheitsupdates | automatisch | [installieren](action_words_installieren_8e432bcd-2e41-444d-98d4-c4dbbdc9e575) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE Sicherheitsupdates automatisch installieren.</span>

> [!info]- Guidance
>Dies kann durch direkten Download vom Hersteller oder einen eigenen Verteilerserver umgesetzt werden, so lange dieser ebenfalls automatisch aktuell gehalten wird. Damit Sicherheitsupdates des Betriebssystems auch tatsächlich wirken und Fehlerzustände vermieden werden ist typischerweise ein Neustart erforderlich, damit die Betriebssystemfunktionen und damit verbundene Anwendungen aus dem installierten Update neu geladen und in einen definierten Zustand versetzt werden. Manche Systeme unterstützen alternativ auch Live-Patching des Betriebssystems im laufenden Betrieb.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9a9b1174-5e40-49a5-8c4b-599c394a8de7 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 9a9b1174-5e40-49a5-8c4b-599c394a8de7 |
