---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.6 Getrennte Datenhaltung
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
result_reference:
- Zugang
- Zugangskonto
- Zugriff
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.6 - Getrennte Datenhaltung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

> [!example]- Untergeordnete Controls
> [KONF.6.6.1 Mandantenfähigkeit](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.6.6.1%20Mandantenfähigkeit.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Zugriffe eines Zugangskontos auf Daten anderer Zugangskonten |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen SOLLTE Zugriffe eines Zugangskontos auf Daten anderer Zugangskonten einschränken.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |> > | [Zugangskonto](result_Zugangskonto_00000000-0000-0000-0000-000000000000) | Anmeldekonto (User Account) zur Anmeldung an einem IT-System oder einer Anwendung. |> > | [Zugriff](result_Zugriff_00000000-0000-0000-0000-000000000000) | Mit Zugriff wird die Nutzung von Informationen oder Daten bezeichnet. Über Zugriffsberechtigungen wird geregelt, welche Personen im Rahmen ihrer Funktionen oder welche IT-Anwendungen bevollmächtigt sind, Informationen, Daten oder auch IT-Anwendungen, zu nutzen oder Transaktionen auszuführen. |

> [!info]- Guidance
>Dies kann je nach Anwendung z.B. durch eine in der Anwendung integrierte Rollen- und Rechteverwaltung, Zugriffsrechte auf Dateisystemebene oder durch die Verwendung unterschiedlicher Systeme oder Netze pro Zugang realisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 55e2c264-c09d-4967-83ab-f4430f898099 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 55e2c264-c09d-4967-83ab-f4430f898099 |
