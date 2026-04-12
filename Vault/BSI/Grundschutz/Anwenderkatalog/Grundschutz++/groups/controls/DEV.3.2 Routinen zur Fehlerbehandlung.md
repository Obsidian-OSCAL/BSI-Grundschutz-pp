---
tags:
- security_by_design_error_handling_produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.3.2 Routinen zur Fehlerbehandlung
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: ausführen
stmt_documentation: Freigabeplan
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.3.2 - Routinen zur Fehlerbehandlung
> [!example]- Tags:> [[tags_Security_by_Design|Security by Design]]> [[tags_Error_Handling|Error Handling]]> [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [DEV.3 Softwareentwicklung - Härtung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.3%20Softwareentwicklung%20-%20Härtung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)*<br> *  &rarr; [Softwareentwicklung - Härtung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.3%20Softwareentwicklung%20-%20Härtung.md) *</div> | [Entwicklung](practices_Entwicklung_108b65aa-5964-49d7-b9eb-dc8946a923ca) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | spezifische und allgemeine Routinen zur Fehlerbehandlung |  | [ausführen](action_words_ausführen_54a1c8e6-043f-411c-8e83-a5a47bb840fe) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Entwicklung für Anwendungen SOLLTE spezifische und allgemeine Routinen zur Fehlerbehandlung ausführen.</span>

> [!info]- Guidance
>Behandeln Sie Fehler (Exceptions) möglichst nahe an der Quelle (z.B. Buffer Overflows, fehlende Dateien) und sehen sie eine Routine vor, die unerwartete Fehler abfängt. Geben Sie passende Fehlermeldungen aus und protokollieren Sie Fehler.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e06f7f69-4c90-4e39-b6be-a9428548e824 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | e06f7f69-4c90-4e39-b6be-a9428548e824 |
