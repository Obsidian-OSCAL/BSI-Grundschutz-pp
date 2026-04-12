---
tags:
- zero_trust_privilege_escalation_insider_threat_privilegierte_rechte
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.5 Privilegierte Zugangskonten
stmt_target_object_category: Administrierende
stmt_modal_verb: SOLLTE
stmt_action_word: verankern
stmt_documentation: Inventar Berechtigungen
result_reference: Zugang
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.5 - Privilegierte Zugangskonten
> [!example]- Tags:> [[tags_Zero_Trust|Zero Trust]]> [[tags_Privilege_Escalation|Privilege Escalation]]> [[tags_Insider_Threat|Insider Threat]]> [[tags_Privilegierte_Rechte|Privilegierte Rechte]]
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [Administrierende](target_object_categories_Administrierende_efd76832-f5a1-432a-836d-c8d5c6d212cc) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | separate Zugangskonten für administrative Tätigkeiten (Administrationskonten) |  | [verankern](action_words_verankern_f8ba5e7f-9eac-4f04-8638-586bdcdc64f4) | [Inventar Berechtigungen](documentation_guidelines_Inventar_Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für Administrierende SOLLTE separate Zugangskonten für administrative Tätigkeiten (Administrationskonten) verankern.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |

> [!info]- Guidance
>Zugangskonten mit privilegierten Rechten (Superuser wie z.B. root) könnten durch menschliche Fehler oder Schadcode weitreichende Probleme verursachen. Bewährt hat es sich daher für administrative Tätigkeiten wie die Installation von Anwendungen dedizierte Zugangskonten einzurichten und diese auch nur für derartige Tätigkeiten zu verwenden. Für normale Geschäftsaktivitäten wie E-Mail oder Webbrowser nutzen auch Administrierende dann ausschließlich Zugangskonten ohne administrative Berechtigungen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4791c533-f811-48cf-9957-6e1d438028f5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 4791c533-f811-48cf-9957-6e1d438028f5 |

> [!info]- Links> > related: [SENS.10.5 Systemadministration - Internetnutzung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/SENS.10.5%20Systemadministration%20-%20Internetnutzung.md)
