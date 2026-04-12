---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.3 Änderung von Default-Zugangsdaten
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: ausführen
stmt_documentation: Konfigurationshistorie
result_reference: Zugang
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.3 - Änderung von Default-Zugangsdaten
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Änderung von Default-Zugangsdaten |  | [ausführen](action_words_ausführen_54a1c8e6-043f-411c-8e83-a5a47bb840fe) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE die Änderung von Default-Zugangsdaten ausführen.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |

> [!info]- Guidance
>"Default-Zugangsdaten" sind werkseitig voreingestellte Benutzername-Passwort-Kombinationen wie "root" oder "administrator", sowie vergleichbare Authentifizierungsmerkmale, die bei der Erstinbetriebnahme von IT-Systemen unverändert vorhanden sind. Diese Daten sind in der Regel öffentlich dokumentiert oder leicht im Internet auffindbar. Ihr Fortbestehen im Produktivbetrieb könnte ein erhebliches Risiko darstellen, da ein Angreifer mit minimalem Aufwand Zugriff auf Systeme erlangen könnte. Ein klassischer Vorfall könnte sein, dass ein öffentlich erreichbarer Router mit unveränderten Standardzugängen übernommen wird. Die Änderung kann demgegenüber sicherstellen, dass nur berechtigte Personen Zugriff erlangen, und kann damit unbefugte Manipulationen oder Datendiebstahl wirksam erschweren. Eine Institution kann die Anforderung umsetzen, indem bei der Inbetriebnahme jedes Systems ein Prozess etabliert wird, der die Standardzugangsdaten unmittelbar ersetzt. Dies kann beispielsweise (1) durch verpflichtende Initial-Setup-Routinen erfolgen, die eine Passwortänderung erzwingen, oder (2) durch zentrale Checklisten oder automatisierte Inventarisierung, die offene Standardzugänge identifizieren und schließen. Die Anforderung ist auch dann erfüllt, wenn diese Zugänge deaktiviert oder durch Zugänge mit von der Institution verwalteten Zugangsdaten ersetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 14a61781-67a3-41c7-9f73-89d5809ea2b0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 14a61781-67a3-41c7-9f73-89d5809ea2b0 |
