---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.19 Zwischenspeicherung von Zugangsdaten
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: deaktivieren
stmt_documentation: Inventar Berechtigungen
result_reference: Zugang
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.19 - Zwischenspeicherung von Zugangsdaten
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Zwischenspeicherung der Zugangsdaten | von Nutzern | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Inventar Berechtigungen](documentation_guidelines_Inventar Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für IT-Systeme SOLLTE die Zwischenspeicherung der Zugangsdaten von Nutzern deaktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |

> [!info]- Guidance
>Wird die Zwischenspeicherung von Zugangsdaten auf IT-Systemen deaktiviert, so wird Angreifern deren Diebstahl erschwert. Kann unter Windows ab Server 2012 R2 durch Zuweisung aller Zugangskonten zur Gruppe "Geschützte Benutzer" (Protected Users) umgesetzt werden. Konten für Dienste und Computer brauchen nicht Mitglied von „Geschützte Nutzer“ sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 13d83a70-bce9-4027-8d4b-d16ee051cfd5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 13d83a70-bce9-4027-8d4b-d16ee051cfd5 |
