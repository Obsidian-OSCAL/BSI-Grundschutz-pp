---
tags:
- lieferketten_secure_compiling_practices
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.5 Updates externer Softwarebibliotheken
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: testen
stmt_documentation: Freigabeplan
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.5 - Updates externer Softwarebibliotheken
> [!example]- Tags:> [[tags_Lieferketten|Lieferketten]]> [[tags_Secure Compiling Practices|Secure Compiling Practices]]
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)*<br> *  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *</div> | [Entwicklung](practices_Entwicklung_108b65aa-5964-49d7-b9eb-dc8946a923ca) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | externe Softwarebibliotheken auf Sicherheitsupdates | vor dem Release | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | [Freigabeplan](documentation_guidelines_Freigabeplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Entwicklung für Anwendungen SOLLTE externe Softwarebibliotheken auf Sicherheitsupdates vor dem Release testen.</span>

> [!info]- Guidance
>Werden veraltete Softwarebibliotheken in eine veröffentlichte Software eingebunden, so können diese Sicherheitslücken oder Fehler enthalten, die in den aktuellen Versionen bereits behoben sind. Prüfen Sie daher vor einer Freigabe der Software ob eingebundene Bibliotheken aktualisiert wurden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3d451248-af76-44a4-87b9-8a86cdff4c28 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 3d451248-af76-44a4-87b9-8a86cdff4c28 |
