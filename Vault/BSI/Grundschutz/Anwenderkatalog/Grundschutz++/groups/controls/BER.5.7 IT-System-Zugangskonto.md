---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.5.7 IT-System-Zugangskonto
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: zuweisen
stmt_documentation: Inventar Berechtigungen
result_reference:
- Zugang
- Zugangskonto
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.5.7 - IT-System-Zugangskonto
Gruppe: [BER.5 Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Berechtigungsmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.5%20Berechtigungsmanagement.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | diese genau einem Zugangskonto |  | [zuweisen](action_words_zuweisen_bdb029e3-9154-4f33-a74b-5055a1ce4020) | [Inventar Berechtigungen](documentation_guidelines_Inventar_Berechtigungen) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung für IT-Systeme KANN diese genau einem Zugangskonto zuweisen.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |> > | [Zugangskonto](result_Zugangskonto_00000000-0000-0000-0000-000000000000) | Anmeldekonto (User Account) zur Anmeldung an einem IT-System oder einer Anwendung. |

> [!info]- Guidance
>Wenn ein besonders schützenswertes IT-System nur von einer Person oder Identität genutzt wird, empfiehlt es sich dieses mit genau einem zugehörigen Zugangskonto zu verknüpfen. Dadurch wird ausgeschlossen, dass weitere Konten unnötig Zugriff erhalten. Bei Revisionen ist auf diese Weise eindeutig nachvollziehbar, welche Identität Zugriff auf das System hatte. Das Vorgehen ist auch auf virtualisierte IT-Systeme übertragbar. Ein Beispiel ist eine spezielle Administrationskonsole, die ausschließlich einem dedizierten Admin-Konto zugeordnet ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7057a1f6-0804-49ac-9d7f-289ecc71fa33 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 7057a1f6-0804-49ac-9d7f-289ecc71fa33 |
