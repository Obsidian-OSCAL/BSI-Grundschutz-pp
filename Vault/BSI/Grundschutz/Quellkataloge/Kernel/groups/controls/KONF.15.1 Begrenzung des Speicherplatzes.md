---
tags:
- Produktbeschreibung_Denial_of_Service
- konf151-prm1
- konf151-prm2
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.15.1 Begrenzung des Speicherplatzes
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.15.1 - Begrenzung des Speicherplatzes
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Denial of Service](tags_Denial of Service)"
Gruppe: [KONF.15 Ressourcenauslastung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.15%20Ressourcenauslastung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Ressourcenauslastung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.15%20Ressourcenauslastung.md) *** | Anwendungen, Hostsysteme | KANN | in der Anwendung zur Verfügung stehenden Speicherplatz pro {{Zugangskonto oder Mandant}} | anhand von {{Schwellwerten}} | einschränken | Konfigurationshistorie | >Konfiguration für Anwendungen von Hostsystemen KANN in der Anwendung zur Verfügung stehenden Speicherplatz pro {{ insert: param, konf.15.1-prm1 }} anhand von {{ insert: param, konf.15.1-prm2 }} einschränken.

> [!info]- Guidance
>Dies ist besonders in Multi-Tenant-Architekturen relevant, wie sie häufig bei Cloud-Diensten oder SaaS-Anwendungen (Software as a Service) zum Einsatz kommen. Ein solcher maximaler Schwellwert (engl. threshold) könnte beispielsweise 5 GB oder 10 GB betragen und stellt die Obergrenze für den Speicherplatz dar, der einem einzelnen Konto oder Mandanten zugewiesen wird. Die Beschränkung des verfügbaren Speicherplatzes kann verhindern, dass ein einzelnes Konto oder ein Mandant die gesamten Ressourcen des Hostsystems belegt und so die Leistung für andere Nutzer negativ beeinflusst, was zu einer Denial-of-Service-Situation (DoS) führen könnte. Bei der Umsetzung ist es sinnvoll auch ein Benachrichtigungssystem zu etablieren, das Nutzer oder Administratoren informiert, wenn ein Schwellenwert kurz vor der Überschreitung steht. Zudem können automatisierte Prozesse zur Datenbereinigung (data lifecycle management) in Betracht gezogen werden, die ältere oder nicht mehr benötigte Dateien in solchen Fällen archivieren oder löschen, um den Speicherplatz effizient zu nutzen. Die Institution kann auch verschiedene Schwellenwerte für unterschiedliche Kontotypen oder Mandanten festlegen, basierend auf deren spezifischen Bedürfnissen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 15596e08-6978-4e61-bf6c-63e24575788f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 15596e08-6978-4e61-bf6c-63e24575788f |
