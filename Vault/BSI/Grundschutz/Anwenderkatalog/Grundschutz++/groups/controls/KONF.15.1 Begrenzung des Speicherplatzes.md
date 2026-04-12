---
tags:
- produktbeschreibung_denial_of_service
- konf151-prm1
- konf151-prm2
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.15.1 Begrenzung des Speicherplatzes
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
result_reference:
- Zugang
- Zugangskonto
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.15.1 - Begrenzung des Speicherplatzes
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Denial_of_Service|Denial of Service]]
Gruppe: [KONF.15 Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | Anwendungen, Hostsysteme | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | in der Anwendung zur Verfügung stehenden Speicherplatz pro {{Zugangskonto oder Mandant}} | anhand von {{Schwellwerten}} | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen von Hostsystemen KANN in der Anwendung zur Verfügung stehenden Speicherplatz pro {{ insert: param, konf.15.1-prm1 }} anhand von {{ insert: param, konf.15.1-prm2 }} einschränken.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugang](result_Zugang_00000000-0000-0000-0000-000000000000) | Mit Zugang wird die Nutzung von IT-Systemen, System-Komponenten und Netzen bezeichnet. Zugangsberechtigungen erlauben somit einer Person, bestimmte Ressourcen wie IT-Systeme oder System-Komponenten und Netze zu nutzen. |> > | [Zugangskonto](result_Zugangskonto_00000000-0000-0000-0000-000000000000) | Anmeldekonto (User Account) zur Anmeldung an einem IT-System oder einer Anwendung. |

> [!info]- Guidance
>Dies ist besonders in Multi-Tenant-Architekturen relevant, wie sie häufig bei Cloud-Diensten oder SaaS-Anwendungen (Software as a Service) zum Einsatz kommen. Ein solcher maximaler Schwellwert (engl. threshold) könnte beispielsweise 5 GB oder 10 GB betragen und stellt die Obergrenze für den Speicherplatz dar, der einem einzelnen Konto oder Mandanten zugewiesen wird. Die Beschränkung des verfügbaren Speicherplatzes kann verhindern, dass ein einzelnes Konto oder ein Mandant die gesamten Ressourcen des Hostsystems belegt und so die Leistung für andere Nutzer negativ beeinflusst, was zu einer Denial-of-Service-Situation (DoS) führen könnte. Bei der Umsetzung ist es sinnvoll auch ein Benachrichtigungssystem zu etablieren, das Nutzer oder Administratoren informiert, wenn ein Schwellenwert kurz vor der Überschreitung steht. Zudem können automatisierte Prozesse zur Datenbereinigung (data lifecycle management) in Betracht gezogen werden, die ältere oder nicht mehr benötigte Dateien in solchen Fällen archivieren oder löschen, um den Speicherplatz effizient zu nutzen. Die Institution kann auch verschiedene Schwellenwerte für unterschiedliche Kontotypen oder Mandanten festlegen, basierend auf deren spezifischen Bedürfnissen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 15596e08-6978-4e61-bf6c-63e24575788f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 15596e08-6978-4e61-bf6c-63e24575788f |
